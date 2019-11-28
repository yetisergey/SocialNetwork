namespace Chat.Web
{
    using Authorization.Service;
    using Chat.Domain;
    using Chat.Services;
    using Chat.Web.Hubs;
    using Microsoft.AspNetCore.Builder;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.DependencyInjection;
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSignalR();

            services.AddSingleton<IAuthorizationRedisService, AuthorizationRedisService>();
            services.AddTransient<IChatService, ChatService>();
            services.AddTransient<IChatContext, ChatContext>();

        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseEndpoints(routes =>
            {
                routes.MapHub<ChatHub>("/chat");
            });
        }
    }
}