import { Routes, Route } from "react-router-dom";
import BookingModals from "pages/BookingModals";
import TeacherSearch from "pages/TeacherSearch";
import TeacherProfile from "pages/TeacherProfile";
import Classroom from "pages/ClassRoom";
import Home from "pages/Home";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/teacher-profile" element={<TeacherProfile />} />
            <Route path="/teacher-search" element={<TeacherSearch />} />
            <Route path="/book-modal" element={<BookingModals />} />
            <Route path="/class-room" element={<Classroom />} />
            <Route path='/' element={<Home />} />
        </Routes>
    );
}

export default AppRouter;