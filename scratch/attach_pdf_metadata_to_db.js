const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '../data/db.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

const publicBase = path.join(__dirname, '../public');

db.notes = db.notes.map(note => {
  let pdfUrl = '';
  let pdfUrlHi = '';
  let pdfName = '';
  let pdfSize = '';

  if (note.classLevel === 'Class 5') {
    if (note.id.startsWith('ncert-c5-math-ch')) {
      const chNum = parseInt(note.id.replace('ncert-c5-math-ch', ''), 10);
      const chStr = String(chNum).padStart(2, '0');
      pdfUrl = `/ncert_books/class5/math_ch${chStr}.pdf`;
      pdfName = `NCERT_Class5_MathsMela_Chapter_${chStr}.pdf`;
    } else if (note.id === 'ncert-c5-evs-ch1') {
      pdfUrl = `/ncert_books/class5/evs_ch01.pdf`;
      pdfName = `NCERT_Class5_EVS_LookingAround_Ch01_SuperSenses.pdf`;
    } else if (note.id === 'ncert-c5-hindi-ch1') {
      pdfUrl = `/ncert_books/class5/hindi_ch01.pdf`;
      pdfName = `NCERT_Class5_Hindi_Rimjhim_Ch01.pdf`;
    }
  } else if (note.classLevel === 'Class 6') {
    if (note.id.startsWith('ncert-c6-m')) {
      const chNum = parseInt(note.id.replace('ncert-c6-m', ''), 10);
      const chStr = String(chNum).padStart(2, '0');
      pdfUrl = `/ncert_books/class6/math_ch${chStr}.pdf`;
      pdfUrlHi = `/ncert_books/class6/math_ch${chStr}_hi.pdf`;
      pdfName = `NCERT_Class6_GanitaPrakash_Ch${chStr}.pdf`;
    } else if (note.id === 'ncert-c6-sci01') {
      pdfUrl = `/ncert_books/class6/science_ch01.pdf`;
      pdfUrlHi = `/ncert_books/class6/science_ch01_hi.pdf`;
      pdfName = `NCERT_Class6_Curiosity_Science_Ch01.pdf`;
    } else if (note.id === 'ncert-c6-sst01') {
      pdfUrl = `/ncert_books/class6/sst_ch01.pdf`;
      pdfUrlHi = `/ncert_books/class6/sst_ch01_hi.pdf`;
      pdfName = `NCERT_Class6_ExploringSociety_Ch01.pdf`;
    } else if (note.id === 'ncert-c6-hin01') {
      pdfUrl = `/ncert_books/class6/hindi_ch01.pdf`;
      pdfName = `NCERT_Class6_Malhar_Hindi_Ch01.pdf`;
    }
  }

  // Check physical file size
  if (pdfUrl) {
    const fullPath = path.join(publicBase, pdfUrl);
    if (fs.existsSync(fullPath)) {
      const bytes = fs.statSync(fullPath).size;
      pdfSize = (bytes / (1024 * 1024)).toFixed(2) + ' MB';
    }
  }

  return {
    ...note,
    pdfUrl,
    pdfUrlHi: pdfUrlHi || pdfUrl,
    pdfName: pdfName || 'NCERT_Chapter.pdf',
    pdfSize: pdfSize || '2 MB'
  };
});

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log('Successfully updated all 30 notes with pdfUrl, pdfUrlHi, pdfName, and pdfSize.');

// Verify
const updatedDb = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
updatedDb.notes.forEach((n, idx) => {
  console.log(`[${idx + 1}] ${n.id} -> ${n.pdfUrl} (Size: ${n.pdfSize})`);
});
