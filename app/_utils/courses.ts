"use server";

import { GraphQLClient, gql } from "graphql-request";

interface Course {
  id: string;
  courseName: string;
  courseDescription: string;
  createdAt: string;
  courseCover: {
    url: string;
  };
}

export async function getCourses(): Promise<Course[] | undefined> {
  const hygraph = new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_API_KEY!);
  const query = gql`
    query MyQuery {
      coursesLists {
        id
        courseName
        courseDescription
        createdAt
        courseCover {
          url
        }
      }
    }
  `;

  try {
    const result: any = await hygraph.request<{ coursesLists: Course[] }>(
      query
    );
    if (result && result.coursesLists) {
      return result.coursesLists;
    } else {
      throw new Error(
        "Failed to fetch courses lists. Response format incorrect."
      );
    }
  } catch (error) {
    console.error("Error fetching courses lists:", error);
    return undefined;
  }
}
