import { collection, doc, getDoc, getDocs, orderBy, query, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface CourseProps {
  id: string;
  title: string;
  description?: string;
  audioUrl?: string;
  transcriptUrl?: string;
  price?: number;
  createdAt: Date;
  isPublished? : boolean;
}


export const getCourses = async (): Promise<CourseProps[]> => {
  try {
    const q = query(collection(db, "courses"), orderBy("createdAt", "desc"))
    const querySnapshot = await getDocs(q);
    
    const courses: CourseProps[] = querySnapshot.docs.map((doc) => {
      console.log(doc.id)
      return({
        id: doc.id,
        title: doc.data().title,
        description: doc.data().description || "",
        audioUrl: doc.data().audioUrl || "",
        transcriptUrl: doc.data().transcriptUrl || "",
        price: doc.data().price,
        createdAt: doc.data().createdAt.toDate(),
      })
    });

    return courses;
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
};

export const getCourse = async (courseId: string):Promise<CourseProps | undefined> => {
  try {
    const courseRef = doc(db, 'courses', courseId)
    const query = await getDoc(courseRef)
    if (query.exists()) {
      return({
        id: query.id,
        title: query.data().title,
        description: query.data().description || "",
        audioUrl: query.data().audioUrl || "",
        transcriptUrl: query.data().transcriptUrl || "",
        price: query.data().price,
        createdAt: query.data().createdAt.toDate(),
      })
    } else return undefined

  } catch(e:any) {
    console.error(e.message)
    return undefined
  }
}

export async function updateCourse(courseId: string, updatedData: Partial<CourseProps>) {
  if (!courseId) throw new Error("Course ID is required");

  try {
     const courseRef = doc(db, "courses", courseId);
     await updateDoc(courseRef, updatedData);
     return { success: true };
  } catch (error) {
    console.error("Error updating")
    return { success: false };
  }
}