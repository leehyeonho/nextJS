import { Suspense } from "react";
import styles from "../../../../styles/topic.module.css"
import BookList from "../../../../components/book-list";


export default async function TopicDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div>
      <Suspense fallback={<h1>Loading info</h1>}>
        <div className={styles.container}>
          <BookList id={id} />
        </div>
      </Suspense>
    </div>
  );
}