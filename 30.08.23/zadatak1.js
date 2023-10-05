// Koristeći metode rada nad stringovima iz zadanog stringa:
//   1. Spremite duljinu stringa u varijablu.
//   2. Izdvojite riječ 'sit' u zasebnu varijablu.
//   3. Zamijenite riječ 'amet' sa riječi 'elit'.
//   4. Konkatenirajte u novu varijablu zadani string sa stringom 'consectetur adipiscing elit', sa zarezom izmedu.
//   5. Konvertirajte sve riječi u orginalnom stringu u velika slova
//   6. Maknite počenu prazninu u stringu
//   7. Nađite slovo na poziciji 12

var text = " Lorem ipsum dolor sit amet";

//   1. Spremite duljinu stringa u varijablu.
console.log(text.length);
//   2. Izdvojite riječ 'sit' u zasebnu varijablu.
var wordSit = text.substring(19, 22); // Ili split, splice
console.log(wordSit);
//   3. Zamijenite riječ 'amet' sa riječi 'elit'.
console.log(text.replace("amet", "elit"));
//   4. Konkatenirajte u novu varijablu zadani string sa stringom 'consectetur adipiscing elit', sa zarezom izmedu.
var newText = text + ", consectetur adipiscing elit";
console.log(newText);
//   5. Konvertirajte sve riječi u orginalnom stringu u velika slova
console.log(text.toUpperCase());
//   6. Maknite počenu prazninu u stringu
console.log(text.trim());
//   7. Nađite slovo na poziciji 12
console.log(text.charAt(12));
