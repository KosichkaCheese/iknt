export default function TeacherCard({ teacher }) {
    var path = '/src/assets/' + teacher.pic
    return (
        <div className="teacher-card">
            <img src={path}></img>
            <div className="teacher-content">
                <h2>{teacher.name}</h2>
                <p>{teacher.title}</p>
                <p style={{ textDecoration: 'underline' }}>Email: {teacher.email}</p>
            </div>
        </div>
    )
}