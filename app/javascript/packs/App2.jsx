import React from 'react';
import ReactDOM from 'react-dom'
import Language from './Language';

const App2 = (props) => {
  //Datenarray Definition (MAP)
  let languageList = [
    {
      name: 'Vue.js',
    image: 'http://hudehisa.sakura.ne.jp/gitgub_image/react_flag_england.png',
    },
    {
      name: 'REACT.js',
    image: 'http://hudehisa.sakura.ne.jp/gitgub_image/react_flag_japan.png',
    },
    {
      name: 'Anguler.js',
    image: 'http://hudehisa.sakura.ne.jp/gitgub_image/react_flag_germany.png',
    },
    {
      name: 'Git',
    image: 'http://hudehisa.sakura.ne.jp/gitgub_image/react_flag_germany.png',
    },
    {
        name: 'Node.js',
      image: 'http://hudehisa.sakura.ne.jp/gitgub_image/react_flag_germany.png',
      },
      {
        name: 'Command',
      image: 'http://hudehisa.sakura.ne.jp/gitgub_image/react_flag_germany.png',
      },
      {
        name: 'PaaS',
      image: 'http://hudehisa.sakura.ne.jp/gitgub_image/react_flag_germany.png',
      },
      {
        name: 'Ssg',
      image: 'http://hudehisa.sakura.ne.jp/gitgub_image/react_flag_germany.png',
      }
  
  ];
    return (
      <div className="mt-5">
        <h2>Add Basic</h2>
        <div className='language'>
          {/* 以下のコードを削除してください */}
          {/* ここまで */}
          {/* mapメソッドを用いて、Languageコンポーネントを表示してください */}
          {languageList.map((languageItem) => {
            return (
              // Languageコンポーネントを呼び出し、その中でpropsを渡してください
              <Language 
                name={languageItem.name}
                image={languageItem.image}
              />
              
            )
          })}
        </div>
      </div>
    );
  }


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App2 />,
    document.getElementById('welcome2'),
  )
})

export default App2;



