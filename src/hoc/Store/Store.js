import  React from "react"

export function withStore(AppComponent){
    return class withApp extends React.Component{
        state = {
            store: {
                userId: 1,
                isLogin: false,
                userToken: '',
                userEmail: '',
                role: '',
                image: ''
            }
        }

        setIsLogin = (isLog)=>{
            const state = this.state;
            state.store.isLogin = isLog;
            this.setState(state);
        }
        setUserToken = (token)=>{
            const state = this.state;
            state.store.userToken = token;
            this.setState(state);
        }
        setUserEmail = (email)=>{
            const state = this.state;
            state.store.userEmail = email;
            this.setState(state);
        }
        setUserRole = (role)=>{
            const state = this.state;
            state.store.role = role;
            this.setState(state);
        }

        setUserID = (id)=>{
            const state = this.state;
            state.store.userId = id;
            this.setState(state);
        }

        setImage = (image)=>{
            const state = this.state;
            state.store.image = image;
            this.setState(state);
        }

        render() {
            return(
                <AppComponent
                    store={this.state.store}
                    setIsLogin={this.setIsLogin}
                    setUserToken={this.setUserToken}
                    setUserEmail={this.setUserEmail}
                    setUserRole = {this.setUserRole}
                    setUserId = {this.setUserID}
                    setImage={this.setImage}
                    {...this.props}
                />
            )
        }
    }
}
