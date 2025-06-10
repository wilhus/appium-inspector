import { App } from 'antd';
import {useEffect} from 'react';


export default function NotificationHandler() {
    const { notification } = App.useApp();

    useEffect(() => {
        const handleMessage = ((event) => {
            const { args, type } = event.detail;
            notification[type](args);
        });

        document.addEventListener('notificationEvent', handleMessage);

        return () => {
            document.removeEventListener('notificationEvent', handleMessage);
        };
    }, [notification]);

    return null;
}