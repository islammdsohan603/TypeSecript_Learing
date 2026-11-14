import { Student } from "../types/student.types";
export declare const findAllStudents: () => Promise<Student[]>;
export declare const findStudentById: (id: number) => Promise<Student | undefined>;
export declare const createStudentRecord: (studentData: Omit<Student, "id">) => Promise<Student>;
export declare const updateStudentRecord: (id: number, studentData: Partial<Omit<Student, "id">>) => Promise<Student | undefined>;
export declare const deleteStudentRecord: (id: number) => Promise<Student | undefined>;
//# sourceMappingURL=student.database.d.ts.map