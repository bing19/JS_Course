const stdin = process.stdin;
const stdout = process.stdout;

stdout.write('Привет, как тебя зовут?\n');
stdin.on('data', input => {
    const name = input.toString().trim();
    stdout.write(`${name}\n`);
    process.exit();
});

process.on('exit', () => {
   stdout.write('Пока, до новых встреч');
});