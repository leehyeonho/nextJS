"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/topics.module.css"

type Topic = {
  display_name: string,
  list_name: string,
  list_name_encoded: string,
  newest_published_date: string,
  oldest_published_date: string,
  updated: string
}

export default function Topics({ list }: { list: Array<Topic> }) {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 10;
  const itemHeight = 61.25;
  const maxIndex = list.length - visibleCount;
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();
    if (e.deltaY > 0 && startIndex < maxIndex) {
      setStartIndex((prev) => Math.min(prev + 1, maxIndex));
    } else if (e.deltaY < 0 && startIndex > 0) {
      setStartIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  const startY = useRef<number | null>(null);
  const isDragging = useRef(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    startY.current = e.clientY;
    isDragging.current = true;
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current || startY.current === null) return;
    const diff = startY.current - e.clientY;
    if (Math.abs(diff) > 20) {
      if (diff > 0 && startIndex < maxIndex) {
        setStartIndex((prev) => Math.min(prev + 1, maxIndex));
      } else if (diff < 0 && startIndex > 0) {
        setStartIndex((prev) => Math.max(prev - 1, 0));
      }
      startY.current = e.clientY;
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    startY.current = null;
  };

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    wrapper.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      wrapper.removeEventListener("wheel", handleWheel);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [startIndex]);

  return <>
    <main className={styles.wrapper} ref={wrapperRef} onMouseDown={handleMouseDown}>
      <div
        className={styles.itemList}
        style={{ transform: `translateY(-${startIndex * itemHeight}px)` }}
      >
        {list.map((item, index) => (
          <div key={index} className={styles.item}>
            <Link href={`/topics/${item.list_name_encoded}`}>👉{item.display_name}</Link>
          </div>
        ))}
      </div>
    </main>    
  </>;
}