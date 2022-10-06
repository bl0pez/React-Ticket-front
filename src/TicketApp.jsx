import { SocketProvider, UiProvider } from './context';
import { AppRouter } from './routes/AppRouter';

export const TicketApp = () => {
    return (
        <SocketProvider>
        <UiProvider>
            <AppRouter />
        </UiProvider>
        </SocketProvider>
    )
}
