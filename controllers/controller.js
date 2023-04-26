exports.main = (req, res) => {
    res.sendFile('views/main/index.html', {root : '.'});
}