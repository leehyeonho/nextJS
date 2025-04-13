import Link from "next/link";
import styles from "../styles/book-list.module.css";

const API_URL = "https://books-api.nomadcoders.workers.dev/list?name=";

type Book = {
  book_image: string,
  amazon_product_url: string,
  title: string,
  author: string
}

export default async function BookList({ id }: { id: string }) {
  const response = await fetch(API_URL + id, { cache: "no-store" });
  const { results } = await response.json();
  const items = results.books;

  return (
    <div className={styles.gridContainer}>
      {items.map((item: Book, index: number) => (
        <div key={index} className={styles.gridItem}>
          <img className={styles.img} src={item.book_image}></img>
          <div className={styles.info}>
            <h2 className={styles.infoTitle}>{item.title}</h2>
            <span className={styles.infoAuthor}>{item.author}</span>
          </div>
          {
            item.amazon_product_url ?
              <button className={styles.button}>
                <Link href={item.amazon_product_url} className={styles.link}>
                  Buy now
                </Link>
              </button> : ""
          }
        </div>
      ))}
    </div>
  );
}