document.addEventListener('DOMContentLoaded', function() {
  // Add dollar signs animation
  const dollarBg = document.querySelector('.dollar-bg');
  
  // Create floating dollar signs
  function createDollarSign() {
    const dollar = document.createElement('div');
    dollar.innerHTML = '$';
    dollar.style.position = 'fixed';
    dollar.style.color = 'rgba(0, 100, 0, 0.3)';
    dollar.style.fontSize = Math.random() * 20 + 10 + 'px';
    dollar.style.left = Math.random() * window.innerWidth + 'px';
    dollar.style.top = '-50px';
    dollar.style.zIndex = '-1';
    dollar.style.userSelect = 'none';
    dollar.style.pointerEvents = 'none';
    document.body.appendChild(dollar);
    
    // Animation
    let pos = -50;
    const speed = Math.random() * 2 + 1;
    const spinSpeed = Math.random() * 5 + 2;
    let rotation = 0;
    
    const fall = setInterval(() => {
      pos += speed;
      rotation += spinSpeed;
      dollar.style.top = pos + 'px';
      dollar.style.transform = `rotate(${rotation}deg)`;
      
      if (pos > window.innerHeight) {
        clearInterval(fall);
        dollar.remove();
      }
    }, 20);
  }
  
  // Create initial dollar signs
  for (let i = 0; i < 20; i++) {
    setTimeout(createDollarSign, i * 500);
  }
  
  // Continue creating dollar signs periodically
  setInterval(createDollarSign, 1000);
  
  // Add hover effect to net worth
  const netWorth = document.querySelector('.net-worth');
  netWorth.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.1)';
    this.style.transition = 'transform 0.3s ease';
  });
  
  netWorth.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
  });
  
  // Add click effect to profile image
  const profileImg = document.querySelector('.profile-img');
  profileImg.addEventListener('click', function() {
    alert("Bill Gates: From Microsoft to Philanthropy!");
  });
});
