namespace Chat.Web
{
    using Authorization.Attributes;
    using Authorization.Service;
    using Chat.Domain;
    using Chat.Services;
    using Chat.Web.Hubs;
    using Microsoft.AspNetCore.Authentication.JwtBearer;
    using Microsoft.AspNetCore.Builder;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.DependencyInjection;
    using Microsoft.IdentityModel.Tokens;
    using System.Threading.Tasks;

    public class Startup
    {
        const string CorsPolicyName = "AllowAny";

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                 {
                     options.RequireHttpsMetadata = false;
                     options.IncludeErrorDetails = true;
                     options.TokenValidationParameters = new TokenValidationParameters
                     {
                         ValidateIssuer = true,
                         ValidIssuer = AuthOptions.Issuer,
                         ValidateAudience = false,
                         ValidateLifetime = true,
                         IssuerSigningKey = AuthOptions.GetSymmetricSecurityKey(),
                         ValidateIssuerSigningKey = true,
                     };
                     options.Events = new JwtBearerEvents
                     {
                         OnMessageReceived = context =>
                         {
                             var accessToken = context.Request.Query["access_token"];
                             var path = context.HttpContext.Request.Path;
                             if (!string.IsNullOrEmpty(accessToken) &&
                                 (path.StartsWithSegments("/chat")))
                             {
                                 context.Token = accessToken;
                             }
                             return Task.CompletedTask;
                         }
                     };
                 });

            services.AddCors(options =>
            {
                options.AddPolicy(CorsPolicyName,
                    builder => builder
                        .WithOrigins("http://localhost:3000")
                        .AllowAnyHeader()
                        .AllowAnyMethod()
                        .AllowCredentials());
            });

            services.AddRazorPages();
            services.AddSignalR();

            services.AddDistributedRedisCache(options =>
            {
                options.Configuration = "localhost";
                options.InstanceName = "master";
            });

            services.AddSingleton<IAuthorizationRedisService, AuthorizationRedisService>();
            services.AddTransient<IChatService, ChatService>();
            services.AddTransient<IChatContext, ChatContext>();

        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseCors(CorsPolicyName);
            app.UseAuthentication();
            app.UseAuthorization();
            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapRazorPages();
                endpoints.MapHub<ChatHub>("/chat");
            });

        }
    }
}