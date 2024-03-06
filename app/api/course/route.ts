"use server";
// app/api/courses/route.ts
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

export async function GET() {
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
    const result = await hygraph.request<{ coursesLists: Course[] }>(query);

    if (result && result.coursesLists) {
      return new Response(JSON.stringify(result.coursesLists));
    } else {
      throw new Error(
        "Failed to fetch courses lists. Response format incorrect."
      );
    }
  } catch (error) {
    console.error("Error fetching courses lists:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch courses" }), {
      status: 500,
    });
  }
}
