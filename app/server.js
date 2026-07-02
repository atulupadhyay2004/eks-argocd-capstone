const app = require('./app');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('========================================');
  console.log('EKS ArgoCD Capstone Project');
  console.log(`Port: ${PORT}`);
  console.log(`Version: ${process.env.APP_VERSION || '1.0.0'}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'dev'}`);
  console.log('========================================');
});
