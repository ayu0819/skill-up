import React from 'react';
import ReactDOM from 'react-dom'
import Language from './Language';

const App = (props) => {
  //Datenarray Definition (MAP)
  let languageList = [
    {
      name: 'HTML5',
    image: 'http://hudehisa.sakura.ne.jp/gitgub_image/react_flag_england.png',
    },
    {
      name: 'CSS3',
    image: 'http://hudehisa.sakura.ne.jp/gitgub_image/react_flag_japan.png',
    },
    {
      name: 'Javascript',
    image: 'http://hudehisa.sakura.ne.jp/gitgub_image/react_flag_germany.png',
    },
    {
      name: 'Jqery',
    image: 'http://hudehisa.sakura.ne.jp/gitgub_image/react_flag_germany.png',
    },
    {
      name: 'PHP',
    image: 'http://hudehisa.sakura.ne.jp/gitgub_image/react_flag_germany.png',
    },
    {
      name: 'Scss',
    image: 'http://hudehisa.sakura.ne.jp/gitgub_image/react_flag_germany.png',
    },
    {
      name: 'タスクランナー',
    image: 'http://hudehisa.sakura.ne.jp/gitgub_image/react_flag_germany.png',
    },
    {
      name: 'Wordpress',
    image: 'http://hudehisa.sakura.ne.jp/gitgub_image/react_flag_germany.png',
    },
    {
      name: 'SQL',
    image: 'http://hudehisa.sakura.ne.jp/gitgub_image/react_flag_germany.png',
    },
    {
      name: 'CSSフレームワーク',
    image: 'http://hudehisa.sakura.ne.jp/gitgub_image/react_flag_germany.png',
    }
   
  
  ];

    return (
      <div className="mt-5">
        <h1>言語一覧</h1>
        <h2 className="mt-5">Basic</h2>
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
    <App />,
    document.getElementById('welcome'),
  )
})

export default App;



