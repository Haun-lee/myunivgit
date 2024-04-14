import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1>CSE 102 - Assignment 0.3 (Sanghoon Lee)</h1>
      <h2>A year ago, Me in my previous university</h2>
      <h3>
        <img src="/Me.jpg"/>
      </h3>
      <h4>
        <Link href="/">Back to home</Link>
      </h4>
    </>
  );
}