import { UiProvider } from './context/UiContext';
import { AppRouter } from './routes/AppRouter';

export const TicketApp = () => {
    return (
        <UiProvider>
            <AppRouter />
        </UiProvider>
    )
}
