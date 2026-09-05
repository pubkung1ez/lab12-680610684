import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import TaskInput from "../components/TaskInput";
import TaskCard from "../components/TaskCard";
import Footer from "../components/Footer";

export default function TodolistPage() {
  return (
    <div className="container-fluid min-vh-100">
      <div className="row h-100">
        <div className="col-2 p-0">
          <Sidebar username="Tirapan" type="admin" />
        </div>

        <div className="col-10 p-0 d-flex flex-column min-vh-100">
          <Header />

          <main className="flex-grow-1 p-4">
            <div className="container">
              <h2 className="text-center">Todo List</h2>

              <TaskInput />

              <TaskCard
                id="1"
                title="Read a book"
                description="Vite + React + Bootstrap + TS"
                isDone={false}
              />
              <TaskCard
                id="2"
                title="Write code"
                description="Finish project for class"
                isDone={false}
              />
              <TaskCard
                id="3"
                title="Deploy app"
                description="Push project to GitHub Pages"
                isDone={true}
              />
            </div>
          </main>

          <Footer
            year="2026"
            fullName="นายธีรพันทุ์ ไกรทองอยู่"
            studentId="680610684"
          />
        </div>
      </div>
    </div>
  );
}