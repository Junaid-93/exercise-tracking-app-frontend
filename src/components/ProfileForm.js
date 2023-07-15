
function ProfileForm() {

return (
<div >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-10">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card-body p-5 text-center">
      
                  <div className="mb-md-5 mt-md-4 pb-5">
      
                    <div>
                      <h1 className="text-dark text-center">Profile</h1>
                      
                      {/* <h1 style="color: black ; text-align: center; margin: 3pc; border: 2px solid black; border-radius: 10px; ">Profile</h1> */}
      
                    <div className="form-outline form-white mb-4">
                        <input type="text" id="typename" className="form-control form-control-lg" placeholder="Name" />
                      </div>
                    
                    <div className="form-outline form-white mb-4">
                      <input type="email" id="typeEmailX" className="form-control form-control-lg" placeholder="Email" />
                    </div>
      
                    <div className="form-outline form-white mb-4">
                      <input type="password" id="typePasswordX" className="form-control form-control-lg" placeholder="Password" />
                    </div>

                    <div className="form-outline form-white mb-4">
                        <textarea id="typeabout" className="form-control form-control-lg" placeholder="About yourself" ></textarea>
                      </div>
      
      
                    <button className="btn btn-outline-light btn-lg px-5" type="submit">Update Profile</button>
      
                    
      
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
      }

      export default ProfileForm;