import { ICourse } from "src/features/cources/interfaces/ICourse";
import { IUserCourse } from "src/features/cources/interfaces/IUserCourse";

export const MOCKED_COURSES: ICourse[] = [
    {
        id: 1,
        name: "Курс 1",
        durationDays: 5,
        testMaxScore: 10,
    },
    {
        id: 2,
        name: "Подружиться с Asana, узнать как это работает",
        durationDays: 10,
        testMaxScore: 10,
    },
    {
        id: 3,
        name: "Познакомиться с Google Chat",
        durationDays: 5,
        testMaxScore: 10,
    },
    {
        id: 4,
        name: "Прочитай статью про обезьян (нет, мы не превращаемся в Animal Planet)",
        durationDays: 10,
        testMaxScore: 10,
    },
];

export const MOCKED_USER_COURSES: IUserCourse[] = [
    {
        id: 1,
        userId: 4,
        course: MOCKED_COURSES[0],
        startDate: "05.11.2023",
        deadlineDate: "10.11.2023",
        finishDate: "06.11.2023",
        isFinished: true,
        remainingDays: null,
        testScore: 5,
    },
    {
        id: 2,
        userId: 4,
        course: MOCKED_COURSES[1],
        startDate: "05.11.2023",
        deadlineDate: "10.11.2023",
        finishDate: null,
        isFinished: false,
        remainingDays: 5,
        testScore: 5,
    },
    {
        id: 3,
        userId: 4,
        course: MOCKED_COURSES[2],
        startDate: null,
        deadlineDate: null,
        finishDate: null,
        isFinished: false,
        remainingDays: null,
        testScore: 5,
    },
    {
        id: 4,
        userId: 4,
        course: MOCKED_COURSES[3],
        startDate: null,
        deadlineDate: null,
        finishDate: null,
        isFinished: false,
        remainingDays: null,
        testScore: 5,
    },
];