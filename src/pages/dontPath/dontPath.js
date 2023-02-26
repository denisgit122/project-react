import css from './dontPath.module.css'
import './dontPath.css'

const DontPath = () => {
  return(
      <div className={'boxError'}>
          <div className="error">

                  <div className={"wrap"}>
                      <div className={'we'}>
                        <pre><code>
                          <span className={'green'}><p className={"orange"}>&lt;!DOCTYPE html&gt;</p> </span>
                             <span className={"orange"}>&lt;style&gt;</span>
                             <p>
                                 <span class="green">everything</span>

                                 <span className="blue"> awesome</span>
                             </p>
                             <span className="orange">&lt;/style&gt;</span>
                                 <p className="orange">&lt;body&gt;</p>

                                             <p className="comment">&lt;!--The file you are looking
                                               <p>for,
                                                 is not where you think it is.--&gt;</p>
                                              </p>
                                         <span className="orange"></span>

                                     <br />

                                   <span className="info">
                                     <br />
                                         <span className="orange">&nbsp;&lt;/body&gt;</span>
                                       <br/>
                                         <span className="orange">&lt;/html&gt;</span>
                                    </span>
                            <div className={'errors'}>
                                ERROR 404!
                                        FILE NOT FOUND!
                            </div>


                                 </code></pre>
                      </div>

                  </div>

          </div>
</div>

);
};

export {DontPath};