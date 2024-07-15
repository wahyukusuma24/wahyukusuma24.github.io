import Card from './components/Card';
import Button from './components/Button';

function App() {
  return (
    <div className="bg-black grid place-content-center min-h-screen overflow-auto pt-10 pb-10">

      <div className="flex flex-col justify-center pb-10">
        <div className="flex justify-center space-x-5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-purple-600">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54" />
          </svg>
          <div className="text-lg font-semibold text-purple-800 pb-10">CHICAGOREVA DOESN'T LIKE</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 text-purple-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
            />
          </svg>
        </div>
        <div className="flex justify-center gap-x-5 mb-5">
          <div className={'relative'}>
            <div className={'absolute inset-0 bg-green-400 rounded-md blur opacity-75'}></div>
            <div className={'relative bg-green-600 rounded-md'}>
              <div className="text-white px-4 py-2 font-semibold">MATCHA</div>
            <div/>
          </div>    
        </div>
          <div className={'relative'}>
            <div className={'absolute inset-0 bg-lime-400 rounded-md blur opacity-75'}></div>
            <div className={'relative bg-lime-600 rounded-md'}>
              <div className="text-white px-4 py-2 font-semibold">DURIAN</div>
            <div/>
          </div>    
        </div>
          <div className={'relative'}>
            <div className={'absolute inset-0 bg-yellow-400 rounded-md blur opacity-75'}></div>
            <div className={'relative bg-yellow-600 rounded-md'}>
              <div className="text-white px-4 py-2 font-semibold">CHEESE</div>
            <div/>
          </div>    
        </div>
        </div>
      </div>

      <div className="flex justify-center space-x-5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-purple-600">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
        </svg>
        <div className="text-lg font-semibold text-purple-800 pb-10">RECOMMENDATION BY ADMIN</div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-purple-600">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
        </svg>
      </div>

      <div className="flex flex-col md:flex-row md:gap-x-5 gap-y-10 px-5">
        <Card className="mb-5 md:mb-0">
          <div className="p-4">
            <div className="text-lg font-semibold text-purple-800 flex justify-center">Sweet</div>
            <Button brand='Chocomory' menu='Tiramisusu'></Button>
            <Button brand='Chocomory' menu='Pie'></Button>
            <Button brand='Chocomory' menu='Cookies n Cream'></Button>
            <Button brand='BSL' menu='Bolu Susu Lembang'></Button>
            <Button brand='Kunafe' menu='Kue Bolu'></Button>
            <Button brand='Kunafe' menu='Brownies Van Java'></Button>
            <Button brand='Panina' menu='Desserts'></Button>
          </div>
        </Card>
        <Card className="mb-5 md:mt-10">
          <div className="p-4">
            <div className="text-lg font-semibold text-purple-800 flex justify-center">Salty</div>
            <Button brand='Basreng' menu=''></Button>
            <Button brand='Keripik Kaca' menu=''></Button>
            <Button brand='Martabak Asin' menu=''></Button>
            <Button brand='Takoyaki' menu=''></Button>
            <Button brand='Men runtu/gege' menu='Rujak ,etc.'></Button>
            <Button brand='Coffee' menu=''></Button>
            <Button brand='Air Laut' menu='Selat Bali'></Button>
          </div>
        </Card>
      </div>
      <div className="flex flex-col justify-center items-center pt-10">
      <div className="text-sm font-semibold text-purple-800 mb-2">Created by wah</div>
      <div className="text-sm font-semibold text-purple-800">Copyright 2024. All rights reserved</div>
      </div>
    </div>
  );
}

export default App;
