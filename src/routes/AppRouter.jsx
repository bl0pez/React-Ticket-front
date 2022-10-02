import { Navigate, Route, Routes } from 'react-router-dom';

import { Main } from '../layouts/Main';
import { Cola } from '../pages/Cola';
import { CreateTicket } from '../pages/CreateTicket';
import { Desk } from '../pages/Desk';
import { Ingresar } from '../pages/Ingresar';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/*" element={<Main />}>
                <Route path="ingresar" element={<Ingresar />} />
                <Route path="escritorio" element={<Desk />} />
                <Route path="cola" element={<Cola />} />
                <Route path="crear" element={<CreateTicket />} />
                <Route path="*" element={<Navigate to={"/ingresar"} />} />
            </Route>
            <Route path="*" element={<Navigate to={"/ingresar"} />} />
        </Routes>
    )
}
