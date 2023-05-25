import React from 'react';

export default function Home() {
  return (
    <div className="container pt-5 pb-5 mb-2">
      <h1>Resume</h1>
      <embed
        src="../../Resume-Fernando-Sanchez.pdf"
        type="application/pdf"
        width="100%"
        height="600px"
      />
    </div>
  );
}
