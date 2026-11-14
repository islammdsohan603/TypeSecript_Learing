import { readFile, writeFile, rename } from "fs/promises";
import { join } from "path";

import { Student } from "../types/student.types";

// JSON Database File Path
const DB_PATH = join(process.cwd(), "src", "database", "db.json");

// Read Database
const readDatabase = async (): Promise<Student[]> => {
  try {
    const data = await readFile(DB_PATH, "utf-8");

    return JSON.parse(data) as Student[];
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "ENOENT") {
      await writeDatabase([]);
      return [];
    }

    throw error;
  }
};

// Write Database
const writeDatabase = async (students: Student[]): Promise<void> => {
  const tempPath = `${DB_PATH}.tmp`;

  await writeFile(tempPath, JSON.stringify(students, null, 2), "utf-8");

  await rename(tempPath, DB_PATH);
};

// GET ALL STUDENTS
export const findAllStudents = async (): Promise<Student[]> => {
  return await readDatabase();
};

// GET STUDENT BY ID
export const findStudentById = async (
  id: number,
): Promise<Student | undefined> => {
  const students = await readDatabase();

  return students.find((student) => student.id === id);
};

// CREATE STUDENT
export const createStudentRecord = async (
  studentData: Omit<Student, "id">,
): Promise<Student> => {
  const students = await readDatabase();

  const newStudent: Student = {
    id: students.reduce((maxId, student) => Math.max(maxId, student.id), 0) + 1,

    ...studentData,
  };

  students.push(newStudent);

  await writeDatabase(students);

  return newStudent;
};

// UPDATE STUDENT
export const updateStudentRecord = async (
  id: number,
  studentData: Partial<Omit<Student, "id">>,
): Promise<Student | undefined> => {
  const students = await readDatabase();

  const index = students.findIndex((student) => student.id === id);

  if (index === -1) {
    return undefined;
  }

  students[index] = {
    ...students[index],
    ...studentData,
  };

  await writeDatabase(students);

  return students[index];
};

// DELETE STUDENT
export const deleteStudentRecord = async (
  id: number,
): Promise<Student | undefined> => {
  const students = await readDatabase();

  const index = students.findIndex((student) => student.id === id);

  if (index === -1) {
    return undefined;
  }

  const [deletedStudent] = students.splice(index, 1);

  await writeDatabase(students);

  return deletedStudent;
};
