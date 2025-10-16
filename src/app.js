const errorHandler = (err, req, res, next) => {
    console.error('Erro:', err);

    if (process.env.NODE_ENV === 'development') {
        return res.status(500).json({
            erro: 'Erro interno do servidor',
            mensagem: err.message,
            stack: err.stack,
            timestamp: new Date().toISOString(),
            url: req.originalUrl,
            method: req.method
        });
    }

    res.status(500).json({
        erro: 'Erro interno do servidor',
        timestamp: new Date().toISOString()
    });
};

module.exports = errorHandler;