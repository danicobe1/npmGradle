export class queries {
    student1 = { name: 'Daniel', age: '36', carrer: 'Computing Science' };
    student2 = { name: 'Alejandro', age: '26', carrer: 'Biology Scientific' };
    student3 = { name: 'Genialo', age: '36', carrer: 'Architecture' };
    students = [this.student1, this.student2, this.student3]
    getStudents = (request, response) => {
        response.status(200).send(this.students);
    }
    createStudent = (request, response) => {
        console.log(request.body);
        response.status(201).send(request.body);
    }
        

}