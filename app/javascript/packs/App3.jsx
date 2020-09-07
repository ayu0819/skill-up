import React from 'react';
import ReactDOM from 'react-dom'
import Language from './Language';

const App3 = (props) => {
  //Datenarray Definition (MAP)
  let languageList = [
    {
      name: 'Ruby',
    image: 'http://hudehisa.sakura.ne.jp/gitgub_image/react_flag_england.png',
    },
    {
      name: 'Go',
    image: 'http://hudehisa.sakura.ne.jp/gitgub_image/react_flag_japan.png',
    },
    {
      name: 'Python',
    image: 'http://hudehisa.sakura.ne.jp/gitgub_image/react_flag_germany.png',
    },
    {
      name: 'Ruby on Rails',
    image: 'http://hudehisa.sakura.ne.jp/gitgub_image/react_flag_germany.png',
    },
    {
        name: 'Java',
      image: 'http://hudehisa.sakura.ne.jp/gitgub_image/react_flag_germany.png',
      },
      {
        name: 'TypeScript',
      image: 'http://hudehisa.sakura.ne.jp/gitgub_image/react_flag_germany.png',
      }
  
  ];

    return (
      <div className="mt-5">
        <h2>Modern</h2>
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
    <App3 />,
    document.getElementById('welcome3'),
  )
})

export default App3;



