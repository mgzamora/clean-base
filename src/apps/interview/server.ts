import app from './app';

const port : number = app.get('port');

app.listen(port, () => {
    console.log(`Server is available on http://localhost:${port}.`);
    console.log(`Ctrl + c to shutdown.`);
});