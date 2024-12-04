export interface Teacher {
  id: string;
  email: string;
  password: string;
  schoolName: string;
}

export interface PointHistory {
  date: string;
  points: number;
  reason: string;
}

export interface Student {
  id: string;
  name: string;
  avatarUrl: string;
  points: number;
  notes: string;
  pointHistory: PointHistory[];
}

export interface ClassRoom {
  id: string;
  shortId: string;
  name: string;
  teacherId: string;
  students: Student[];
}

export interface Todo {
  id: string;
  teacherId: string;
  text: string;
  completed: boolean;
  createdAt: string;
}

export interface AppState {
  teachers: Teacher[];
  classes: ClassRoom[];
  currentTeacher: Teacher | null;
  todos: Todo[];
}