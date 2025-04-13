import { Suspense } from "react";
import styles from "../../../../styles/topic.module.css"
import BookList from "../../../../components/book-list";

type Props = {
  params: { id: string };
};

async function getParams(): Promise<Props> {
  return { params: { id: "example-id" } };
}

export default async function TopicDetail() {
  const { params } = await getParams();
  return (
    <div>
      <Suspense fallback={<h1>Loading info</h1>}>
        <div className={styles.container}>
          <BookList id={params.id} />
        </div>
      </Suspense>
    </div>
  );
}