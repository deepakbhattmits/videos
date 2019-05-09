import React from 'react';
import Accordion from './Accordian';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube';

class App extends React.Component {
    state = { videos : [], selectedVideo:  null };
    componentDidMount(){
        this.onSearchSubmit('car');
    }
    onSearchSubmit = async (term) => {
      
        const response = await youtube.get('/search', { 
            params: { q:term },
    });
    this.setState({
        videos: response.data.items,
        selectedVideo: response.data.items[0]
    });
    }
    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
      
    }

   
  
   
    render(){
        return (
            <div className="ui container">
            <div className="ui segment">
            <Accordion
            className="accordion"
            selectedIndex={this.state.selectedIndex}
            onChange={(index, expanded, selectedIndex) => console.log(`#${index} ${expanded ? 'expanded' : 'collapsed'} (selectedIndex: ${selectedIndex})`)}
            >
          <div
            data-header="Super simple accordion example"
            className="accordion-item"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
              metus tincidunt, sagittis lorem elementum, blandit enim. Etiam in
              quam eu felis tempus pellentesque. Etiam ac massa vel justo
              suscipit vehicula quis sit amet risus. Nam luctus, sem et aliquam
              consectetur, nisl sapien auctor ex, vel tristique lectus orci et
              mi.
            </p>
            <p>
              Maecenas aliquam rutrum lectus at consectetur. Nullam finibus
              imperdiet risus, eu accumsan magna scelerisque in. In hac
              habitasse platea dictumst. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos. Ut convallis
              sollicitudin orci eget interdum. Pellentesque pharetra pulvinar
              dui, vel commodo massa faucibus sed.
            </p>
            <p>
              Suspendisse laoreet elementum elementum. Nulla porttitor ligula
              sit amet egestas malesuada. Nam suscipit convallis mauris non
              vulputate. Maecenas auctor lacinia mi accumsan commodo. Nunc
              mollis, felis vel finibus rutrum, tellus dolor ultrices odio, et
              volutpat massa erat at leo. Pellentesque quis metus rutrum,
              elementum lorem vel, semper nulla.
            </p>
            <p>
              Etiam a eros risus. Fusce vitae neque ac est faucibus venenatis.
              Praesent non turpis in massa iaculis cursus in ut ante. Aliquam
              libero nunc, porta in bibendum a, imperdiet imperdiet purus. Morbi
              tincidunt convallis tellus ac laoreet. Ut facilisis placerat orci
              non malesuada. Fusce eget augue sed nulla tempus iaculis.
            </p>
            <p>
              Sed sed justo vestibulum, lobortis magna sed, consectetur erat.
              Etiam aliquam metus at purus posuere, a dictum est auctor. Morbi
              quis felis vehicula, feugiat ex quis, tincidunt ligula. Ut vitae
              nunc ullamcorper, interdum quam vitae, porta eros. Praesent quis
              finibus erat, vel rutrum lacus. Aenean at mauris finibus turpis
              interdum condimentum in in ligula. Duis aliquam quis nulla nec
              pellentesque. Sed pulvinar lectus nec ligula consequat, id
              convallis leo efficitur. Donec non congue nulla.
            </p>
          </div>
          <div data-header="Fully responsive, ofc" className="accordion-item">
            <p>
              <img
                src="http://www.emilpalsson.com/react-tiny-accordion-demo1.jpg"
                alt="Demo"
              />
              Quisque molestie luctus erat a sagittis. Praesent blandit, arcu
              sed dictum ornare, metus lorem faucibus enim, sit amet molestie
              sem augue eget metus. Aliquam varius justo neque, iaculis dapibus
              enim faucibus in. Maecenas tempus auctor neque vitae viverra. Cras
              vel pellentesque nibh. Fusce lacinia nisi quis dolor hendrerit
              malesuada a quis purus. Integer efficitur mi dignissim dui aliquam
              ultricies. Etiam facilisis ullamcorper erat. Nunc leo elit,
              dapibus quis lorem non, aliquet fermentum tellus.
            </p>
          </div>
          <div
            data-header="Btw, this guy has a nested accordion"
            className="accordion-item"
          >
            <p>
              Etiam ultricies dignissim fermentum. Orci varius natoque penatibus
              et magnis dis parturient montes, nascetur ridiculus mus. Vivamus a
              elit convallis, feugiat metus eget, tristique tellus.
            </p>
            <Accordion className="accordion">
              <div data-header="Well" className="accordion-item">
                Mauris nec scelerisque ligula. Sed aliquam blandit metus, sed
                semper lectus placerat nec. Nam lobortis faucibus sem at
                rhoncus. Mauris id pellentesque ex. Praesent ornare nunc at
                ultricies bibendum. Maecenas nec ultricies libero. Aenean ac
                hendrerit massa. Class aptent taciti sociosqu ad litora torquent
                per conubia nostra, per inceptos himenaeos. Vivamus non erat
                bibendum leo ultrices bibendum vitae non risus.
              </div>
              <img
                data-header="Your accordion can contain any component really"
                className="accordion-item"
                src="http://www.emilpalsson.com/react-tiny-accordion-demo2.jpg"
                alt="Demo"
              />
            </Accordion>
          </div>
        </Accordion>
            </div>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>

            </div>
        );

    }
}
export default App;