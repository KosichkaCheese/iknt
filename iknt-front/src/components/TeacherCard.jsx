export default function TeacherCard({ teacher }) {
    return (
        <div className="teacher-card">
            <h2>{teacher.name}</h2>
            <p>{teacher.title}</p>
            <p>Email: {teacher.email}</p>
        </div>
    )
}