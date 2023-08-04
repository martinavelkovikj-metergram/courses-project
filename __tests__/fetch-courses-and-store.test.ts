import { fetchCoursesAndStore } from '../src/data-handler/fetch-store-data';
import { Course } from "../src/model/course";
import { getAccessToken } from "../src/data-handler/get-access-token";
import axios from "axios";
import { createTestConnection } from '../test-setup';

jest.mock("../src/data-handler/get-access-token");
jest.mock("axios");
jest.mock("../src/model/course");

describe("fetchCoursesAndStore", () => {
  beforeAll(async () => {
    await createTestConnection();
  });

  test("should fetch courses and store them", async () => {
    const mockAccessToken = "dummy-access-token";
    (getAccessToken as jest.Mock).mockResolvedValue(mockAccessToken);

    const coursesData = [
      { id: 1, course_name: "Course 1", date: "2023-08-04T00:00:00.000Z" },
      { id: 2, course_name: "Course 2", date: "2023-08-05T00:00:00.000Z" },
    ];
    const response = { data: { data: coursesData, next_page_link: null } };
    (axios.get as jest.Mock).mockResolvedValue(response);

    const saveMock = jest.fn();

    (Course as unknown as jest.Mock).mockImplementation(() => ({
      save: saveMock,
    }));

    await fetchCoursesAndStore();
    expect(saveMock).toHaveBeenCalledTimes(coursesData.length);
  });
});
