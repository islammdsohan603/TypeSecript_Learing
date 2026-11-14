import { readFile, writeFile, rename } from "fs/promises";
import { join } from "path";
import { Student } from "../types/student.types";
// JSON Database File Path
const DB_PATH = join(process.cwd(), "src", "database", "db.json");
// Read Database
const readDatabase = async () => {
    try {
        const data = await readFile(DB_PATH, "utf-8");
        return JSON.parse(data);
    }
    catch (error) {
        if (error instanceof Error && "code" in error && error.code === "ENOENT") {
            await writeDatabase([]);
            return [];
        }
        throw error;
    }
};
// Write Database
const writeDatabase = async (students) => {
    const tempPath = `${DB_PATH}.tmp`;
    await writeFile(tempPath, JSON.stringify(students, null, 2), "utf-8");
    await rename(tempPath, DB_PATH);
};
// GET ALL STUDENTS
export const findAllStudents = async () => {
    return await readDatabase();
};
// GET STUDENT BY ID
export const findStudentById = async (id) => {
    const students = await readDatabase();
    return students.find((student) => student.id === id);
};
// CREATE STUDENT
export const createStudentRecord = async (studentData) => {
    const students = await readDatabase();
    const newStudent = {
        id: students.reduce((maxId, student) => Math.max(maxId, student.id), 0) + 1,
        ...studentData,
    };
    students.push(newStudent);
    await writeDatabase(students);
    return newStudent;
};
// UPDATE STUDENT
export const updateStudentRecord = async (id, studentData) => {
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
export const deleteStudentRecord = async (id) => {
    const students = await readDatabase();
    const index = students.findIndex((student) => student.id === id);
    if (index === -1) {
        return undefined;
    }
    const [deletedStudent] = students.splice(index, 1);
    await writeDatabase(students);
    return deletedStudent;
};
//# sourceMappingURL=student.database.js.map