import axios from "axios";
import { getAccessToken } from "../src/data-handler/get-access-token";

jest.mock("axios");

describe("getAccessToken", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should fetch and store the access token", async () => {
    const mockAccessToken = "dummy-access-token";
    const response = { data: { data: { accessToken: mockAccessToken } } };
    axios.post = jest.fn().mockResolvedValue(response);

    const accessToken = await getAccessToken();

    expect(accessToken).toBe(mockAccessToken);
    expect(typeof accessToken).toBe("string");
  });

  test("should return the stored access token without making an API request if already fetched", async () => {
    const mockAccessToken = "dummy-access-token";
    const expirationTime = Date.now() + 18000000;
    (getAccessToken as any).accessToken = mockAccessToken;
    (getAccessToken as any).expirationTime = expirationTime;

    const accessToken = await getAccessToken();

    expect(accessToken).toBe(mockAccessToken);
  });
});
