FROM mcr.microsoft.com/dotnet/core/aspnet:2.2-stretch-slim AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:2.2-stretch AS build
WORKDIR /src
COPY ["Chat/Chat.Web/Chat.Web.csproj", "Chat/Chat.Web/"]
RUN dotnet restore "Chat/Chat.Web/Chat.Web.csproj"
COPY . .
WORKDIR "/src/Chat/Chat.Web"
RUN dotnet build "Chat.Web.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "Chat.Web.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "Chat.Web.dll"]