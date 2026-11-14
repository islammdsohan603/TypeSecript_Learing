export interface Student {
  id: number;
  name: string;
  email: string;
  age: number;
  department: string;
  createdAt: string;
}

export type CreateStudentInput = Omit<Student, "id" | "createdAt">;

export type UpdateStudentInput = Partial<CreateStudentInput>;
