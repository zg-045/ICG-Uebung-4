function formatString(input) {
    // Zeilen aufteilen
    const lines = input.trim().split('\n');
  
    // Verarbeite jede Zeile
    const formattedLines = lines.map(line => {
      const numbers = line.trim().split(' '); // Zahlen in der Zeile aufteilen
  
      // Prüfe, ob es eine Zeile mit 4 Zahlen ist und entferne die führende '3'
      if (numbers.length === 4 && numbers[0] === '3') {
        numbers.shift(); // Entfernt die erste Zahl (die '3')
      }
  
      // Füge die Zahlen mit Komma zusammen
      return numbers.join(',');
    });
  
    // Verbinde die Zeilen mit einem Komma und einem Zeilenumbruch
    return formattedLines.join(',\n');
  }

  const input = `
1 2 0 
 3 6 2 
 7 4 6 
 5 0 4 
 6 0 2 
 3 5 7 
 1 3 2 
 3 7 6 
 7 5 4 
 5 1 0 
 6 4 0 
 3 1 5 
 9 10 8 
 11 14 10 
 15 12 14 
 13 8 12 
 14 8 10 
 11 13 15 
 9 11 10 
 11 15 14 
 15 13 12 
 13 9 8 
 14 12 8 
 11 9 13 
 17 18 16 
 19 22 18 
 23 20 22 
 21 16 20 
 22 16 18 
 19 21 23 
 17 19 18 
 19 23 22 
 23 21 20 
 21 17 16 
 22 20 16 
 19 17 21 
 25 26 24 
 27 30 26 
 31 28 30 
 29 24 28 
 30 24 26 
 27 29 31 
 25 27 26 
 27 31 30 
 31 29 28 
 29 25 24 
 30 28 24 
 27 25 29 
 33 34 32 
 35 38 34 
 39 36 38 
 37 32 36 
 38 32 34 
 35 37 39 
 33 35 34 
 35 39 38 
 39 37 36 
 37 33 32 
 38 36 32 
 35 33 37 
 41 42 40 
 43 46 42 
 47 44 46 
 45 40 44 
 46 40 42 
 43 45 47 
 41 43 42 
 43 47 46 
 47 45 44 
 45 41 40 
 46 44 40 
 43 41 45 
 49 50 48 
 51 54 50 
 55 52 54 
 53 48 52 
 54 48 50 
 51 53 55 
 49 51 50 
 51 55 54 
 55 53 52 
 53 49 48 
 54 52 48 
 51 49 53 
 57 58 56 
 59 62 58 
 63 60 62 
 61 56 60 
 62 56 58 
 59 61 63 
 57 59 58 
 59 63 62 
 63 61 60 
 61 57 56 
 62 60 56 
 59 57 61 
 65 66 64 
 67 70 66 
 71 68 70 
 69 64 68 
 70 64 66 
 67 69 71 
 65 67 66 
 67 71 70 
 71 69 68 
 69 65 64 
 70 68 64 
 67 65 69 
 73 74 72 
 75 78 74 
 79 76 78 
 77 72 76 
 78 72 74 
 75 77 79 
 73 75 74 
 75 79 78 
 79 77 76 
 77 73 72 
 78 76 72 
 75 73 77
  `;
  
  // Testeingabe
  const Testinput = `
  1 1 -1
  1 -1 -1
  1 1 1
  1 -1 1
  -1 1 -1
  -1 -1 -1
  -1 1 1
  -1 -1 1
  3 4 2 0
  3 2 7 3
  3 6 5 7
  3 1 7 5
  3 0 3 1
  3 4 1 5
  3 4 6 2
  3 2 6 7
  3 6 4 5
  3 1 3 7
  3 0 2 3
  3 4 0 1
  `;
  
  // Verwendung
  const result = formatString(input);
  console.log(result);
  