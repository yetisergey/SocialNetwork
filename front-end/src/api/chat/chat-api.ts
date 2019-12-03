import * as signalR from "@aspnet/signalr";
import { IMessage } from "../../models/messages/types";

const hubConnection = new signalR.HubConnectionBuilder()
    .configureLogging(signalR.LogLevel.Debug)
    .withUrl("http://localhost:53216/chat", {
        accessTokenFactory: () => {
            return localStorage.getItem('accessToken') || "";
        }
    }).build();

export const getMessages = (userTo: number,
    callbackGet: (messages: IMessage[]) => void,
    callbackReceive: (messages: IMessage) => void) => {
    socketCommand(() => {
        hubConnection.invoke('Get', userTo);
        hubConnection.on('Get', callbackGet);
        hubConnection.on('Receive', callbackReceive);
    })
}

export const sendMessage = (userTo: number, message: string) => {
    socketCommand(() => {
        hubConnection.invoke('Send', userTo, message);
    })
}

const socketCommand = (action: () => void) => {
    if (hubConnection.state === signalR.HubConnectionState.Disconnected) {
        hubConnection.start().then(_ => {
            action();
        });
    } else {
        action();
    }
}