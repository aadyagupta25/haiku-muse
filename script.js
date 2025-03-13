document.addEventListener('DOMContentLoaded', function() {
    const timelineData = [
      {
        date: '1600s',
        title: 'Birth of Haiku',
        description: 'Haiku emerged from the earlier form of linked-verse poetry known as renga. The famous poet Matsuo Bashō refined it into a distinct literary art.',
        imageUrl: 'https://source.unsplash.com/400x300/?japan,old-scroll'
      },
      {
        date: '1800s',
        title: 'Haiku Gains Popularity',
        description: 'During this period, poets like Kobayashi Issa and Masaoka Shiki further developed haiku, making it widely popular in Japan.',
        imageUrl: 'https://source.unsplash.com/400x300/?poetry,calligraphy'
      },
      {
        date: '1900s',
        title: 'Haiku Goes Global',
        description: 'Haiku spread beyond Japan, inspiring poets worldwide. Many Western poets adopted its form and philosophy.',
        imageUrl: 'https://source.unsplash.com/400x300/?world,books'
      },
      {
        date: '2000s-Present',
        title: 'Digital Age of Haiku',
        description: 'With social media and digital platforms, haiku continues to evolve, reaching a global audience like never before.',
        imageUrl: 'https://source.unsplash.com/400x300/?internet,technology'
      }
    ];
  
    const timeline = document.querySelector('.timeline');
  
    timelineData.forEach((item, index) => {
      const timelineItem = document.createElement('div');
      timelineItem.className = `timeline-item ${index % 2 === 0 ? 'left' : 'right'}`;
  
      const content = document.createElement('div');
      content.className = 'content';
  
      const h2 = document.createElement('h2');
      h2.textContent = `${item.date}: ${item.title}`;
  
      const p = document.createElement('p');
      p.textContent = item.description;
  
      const img = document.createElement('img');
      img.src = item.imageUrl;
      img.alt = item.title;
  
      content.appendChild(h2);
      content.appendChild(p);
      content.appendChild(img);
      timelineItem.appendChild(content);
      timeline.appendChild(timelineItem);
    });
  });
  