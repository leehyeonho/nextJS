import styles from "../../styles/home.module.css"
import Topics from "../../components/topics";
import { API_URL } from "../../src/constants/api";

export const metadata = {
    title: "Home",
};

type Topic = {
    display_name: string,
    list_name: string,
    list_name_encoded: string,
    newest_published_date: string,
    oldest_published_date: string,
    updated: string
}

type Topics = {
    copyright: string,
    num_results: number,
    results: Array<Topic>,
    status: string
}

async function getTopics() {
    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
}

export default async function HomePage() {
    const topics: Topics = await getTopics();
    
    return <>
        <h1 className={styles.h1}>THE NEW YORK TIMES BEST SELLER EXPLORER</h1>
        <main className={styles.main}>
            <Topics list={topics.results} />
        </main>
    </>;
}