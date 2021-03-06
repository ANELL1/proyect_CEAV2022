
import React,{Component} from 'react'
import { Layout,Menu } from 'antd';
import { UsergroupAddOutlined } from '@ant-design/icons';
import TablaArea from './signUpCatAreas'
import TablaOficina from './signUpCatOficinas'
import TablaPersonal from './signUpCatPersonal'
import TablaPuestos from './signUpCatPuesto'
import TablaRoles from './signUpCatRoles'
import TablaEmpleado from './signUpEmpleado'
import TablaChangepass from './changePassword';
import TablaDirectorio from './tablaDataEmpleados'
import { FcGoogle } from "react-icons/fc";
import { MDBIcon } from 'mdbreact'
import { MenuUnfoldOutlined,MenuFoldOutlined ,SolutionOutlined,IdcardOutlined,BankOutlined } from '@ant-design/icons';
import './sideNavAdmin.css'
import imagenCEAV from '../imagen/CEAVlogo.png'
import Fechanotificaciones  from './fechaNotificaciones'
import TablaBajas from './tablaDataBAjasEmpleado'
import ceav from '../imagen/logo.png'
import TablaExt from './sigUpCatExtensiones'

class SideNavAdmin extends Component{
    constructor(props){
        super(props)
        this.state={     
            sideNavTablaDirectorio:true, 
            sideNavArea:false,
            sideNavOficinas:false,
            sideNavPersonal:false,
            sideNavPuesto:false,
            sideNavRoles:false,
            sideNavEmpleados:false,
            sideNavChangePass:false,
            sideNavTablaDirectorio:true,
            sideFechasNotificaciones:false,
            sideTablaBajas:false,
            sideNavExt:false,
            collapsed:false, 
            tablaArea:[],
            tablaOficina:[],
            tablaPersonal:[],
            tablaPuesto:[],
            tablaEmpleados:[],
            tablaDataEmpleados:[],
            // fechaNotificaciones:[]
           
        }
    }

    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };

      sideNavTablaDirectorio(){
        this.setState({sideNavTablaDirectorio:true})
        this.setState({sideNavArea:false})
        this.setState({sideNavOficinas:false})
        this.setState({sideNavPersonal:false})
        this.setState({sideNavPuesto:false})
        this.setState({sideNavRoles:false})
        this.setState({sideNavEmpleados:false})  
        this.setState({sideNavChangePass:false})
        this.setState({sideFechasNotificaciones:false})
        this.setState({sideTablaBajas:false})
        this.setState({sideNavExt:false})
      }       
      sideNavArea(){
        this.setState({sideNavTablaDirectorio:false})
        this.setState({sideNavArea:true})
        this.setState({sideNavOficinas:false})
        this.setState({sideNavPersonal:false})
        this.setState({sideNavPuesto:false})
        this.setState({sideNavRoles:false})
        this.setState({sideNavEmpleados:false})  
        this.setState({sideNavChangePass:false}) 
        this.setState({sideFechasNotificaciones:false})
        this.setState({sideTablaBajas:false})
        this.setState({sideNavExt:false})
      }
      sideNavOficinas(){
        this.setState({sideNavTablaDirectorio:false})
        this.setState({sideNavArea:false})
        this.setState({sideNavOficinas:true})
        this.setState({sideNavPersonal:false})
        this.setState({sideNavPuesto:false})
        this.setState({sideNavRoles:false})
        this.setState({sideNavEmpleados:false})  
        this.setState({sideNavChangePass:false})
        this.setState({sideFechasNotificaciones:false})
        this.setState({sideTablaBajas:false}) 
        this.setState({sideNavExt:false})
      }
      sideNavPersonal(){
        this.setState({sideNavTablaDirectorio:false})
        this.setState({sideNavArea:false})
        this.setState({sideNavOficinas:false})
        this.setState({sideNavPersonal:true})
        this.setState({sideNavPuesto:false})
        this.setState({sideNavRoles:false})
        this.setState({sideNavEmpleados:false})  
        this.setState({sideNavChangePass:false}) 
        this.setState({sideFechasNotificaciones:false})     
        this.setState({sideTablaBajas:false}) 
        this.setState({sideNavExt:false})
      }
      sideNavPuesto(){
        this.setState({sideNavTablaDirectorio:false})
        this.setState({sideNavArea:false})
        this.setState({sideNavOficinas:false})
        this.setState({sideNavPersonal:false})
        this.setState({sideNavPuesto:true})
        this.setState({sideNavRoles:false})
        this.setState({sideNavEmpleados:false})  
        this.setState({sideNavChangePass:false}) 
        this.setState({sideFechasNotificaciones:false}) 
        this.setState({sideTablaBajas:false}) 
        this.setState({sideNavExt:false})
      }
      sideNavRoles(){
        this.setState({sideNavTablaDirectorio:false})
        this.setState({sideNavArea:false})
        this.setState({sideNavOficinas:false})
        this.setState({sideNavPersonal:false})
        this.setState({sideNavPuesto:false})
        this.setState({sideNavRoles:true})
        this.setState({sideNavEmpleados:false})  
        this.setState({sideNavChangePass:false}) 
        this.setState({sideFechasNotificaciones:false}) 
        this.setState({sideTablaBajas:false})   
        this.setState({sideNavExt:false})
      }
      sideNavEmpleados(){
        this.setState({sideNavTablaDirectorio:false})
        this.setState({sideNavArea:false})
        this.setState({sideNavOficinas:false})
        this.setState({sideNavPersonal:false})
        this.setState({sideNavPuesto:false})
        this.setState({sideNavRoles:false})
        this.setState({sideNavEmpleados:true})  
        this.setState({sideNavChangePass:false}) 
        this.setState({sideFechasNotificaciones:false}) 
        this.setState({sideTablaBajas:false}) 
        this.setState({sideNavExt:false})
      }
      sideNavChangePass(){
        this.setState({sideNavTablaDirectorio:false})
        this.setState({sideNavArea:false})
        this.setState({sideNavOficinas:false})
        this.setState({sideNavPersonal:false})
        this.setState({sideNavPuesto:false})
        this.setState({sideNavRoles:false})
        this.setState({sideNavEmpleados:false})  
        this.setState({sideNavChangePass:true})
        this.setState({sideFechasNotificaciones:false})
        this.setState({sideTablaBajas:false})
        this.setState({sideNavExt:false})
      } 
      sideFechasNotificaciones(){
        this.setState({sideNavTablaDirectorio:false})
        this.setState({sideNavArea:false})
        this.setState({sideNavOficinas:false})
        this.setState({sideNavPersonal:false})
        this.setState({sideNavPuesto:false})
        this.setState({sideNavRoles:false})
        this.setState({sideNavEmpleados:false})  
        this.setState({sideNavChangePass:false})
        this.setState({sideFechasNotificaciones:true})
        this.setState({sideTablaBajas:false})
        this.setState({sideNavExt:false})
      }
      sideTablaBajas(){
        this.setState({sideNavTablaDirectorio:false})
        this.setState({sideNavArea:false})
        this.setState({sideNavOficinas:false})
        this.setState({sideNavPersonal:false})
        this.setState({sideNavPuesto:false})
        this.setState({sideNavRoles:false})
        this.setState({sideNavEmpleados:false})  
        this.setState({sideNavChangePass:false})
        this.setState({sideFechasNotificaciones:false})
        this.setState({sideTablaBajas:true})
        this.setState({sideNavExt:false})
      }
      sideNavExt(){
        this.setState({sideNavTablaDirectorio:false})
        this.setState({sideNavArea:false})
        this.setState({sideNavOficinas:false})
        this.setState({sideNavPersonal:false})
        this.setState({sideNavPuesto:false})
        this.setState({sideNavRoles:false})
        this.setState({sideNavEmpleados:false})  
        this.setState({sideNavChangePass:false})
        this.setState({sideFechasNotificaciones:false})
        this.setState({sideTablaBajas:false})
        this.setState({sideNavExt:true})  
      }


      cerrar(){
        this.props.history.push("/")
      }
    render(){
        const { Header, Footer, Sider, Content } = Layout;

        let tablaArea;
        let tablaOficina;
        let tablaPersonal;
        let tablaPuesto;
        let tablaRoles;
        let tablaEmpleados;
        let tablaChangePass;
        let tablaDataEmpleado;
        let tablaFechaNotificaciones
        let tablaBajasEmpleados;
        let tablaExt;

         if(this.state.sideNavArea ===true){
            tablaArea= 
            <div>
           <TablaArea/>
           </div>
         }
         if(this.state.sideNavOficinas === true){
            tablaOficina=
            <div>
             <TablaOficina/>
             </div>
        }
        if(this.state.sideNavPersonal === true){
            tablaPersonal=
            <div>
            <TablaPersonal/>
            </div>
        }
        if(this.state.sideNavPuesto === true){
            tablaPuesto=
            <div>
            <TablaPuestos/>
            </div>

        }
        if(this.state.sideNavRoles === true){
            tablaRoles=
            <div>
            <TablaRoles/>
            </div>
        }
        if(this.state.sideNavEmpleados === true){
            tablaEmpleados=
            <div>
            <TablaEmpleado/>
            </div>
        }
         if(this.state.sideNavChangePass === true){
           tablaChangePass=
           <div>
             <TablaChangepass/>
           </div>
         }
         if(this.state.sideNavTablaDirectorio === true){
           tablaDataEmpleado=
           <div>
             <TablaDirectorio/>
           </div>
         } 
         if(this.state.sideFechasNotificaciones === true)
         tablaFechaNotificaciones = 
         <div>
          <Fechanotificaciones/>
         </div>
         if(this.state.sideTablaBajas === true){
          tablaBajasEmpleados = 
          <div>
            <TablaBajas/>
          </div>
         }
         if(this.state.sideNavExt === true){
          tablaExt=
          <div>
            <TablaExt/>
          </div>
         }
 

        let menu=
        <div>
        <Menu theme="light" mode="inline" className='ant-menu1' defaultSelectedKeys={['1']}>       
        <Menu.Item key="1" onClick={e=>this.sideNavArea()} icon={<MDBIcon icon="chalkboard-teacher" style={{ fontSize: '20px', color:'#000' }}/>}>           
          ??REAS              
        </Menu.Item>
        <Menu.Item key="2"  onClick={e=>this.sideNavOficinas()} icon={<MDBIcon far icon="building" style={{ fontSize: '20px', color: '#000' }}/>} >           
          OFICINAS              
        </Menu.Item>
        <Menu.Item key="3"  onClick={e=>this.sideNavPersonal()} icon={<MDBIcon icon="users-cog" style={{ fontSize: '20px', color: '#000' }} />}>           
          PERSONAL              
        </Menu.Item>
        <Menu.Item key="4"  onClick={e=>this.sideNavPuesto()}  icon={<IdcardOutlined  style={{ fontSize: '25px', color: '#000' }} />}>           
          PUESTOS              
        </Menu.Item>
        <Menu.Item key="5" onClick={e=>this.sideNavRoles()}  icon={<UsergroupAddOutlined style={{ fontSize: '25px', color: '#000' }} />}>           
         ROLES              
        </Menu.Item>
        <Menu.Item key="6"  onClick={e=>this.sideNavEmpleados()} icon={<SolutionOutlined style={{ fontSize: '25px', color: '#000' }} />}>           
         USUARIOS              
        </Menu.Item>
        {/* <Menu.Item key="7"  onClick={e=>this.sideNavChangePass()} icon={<MDBIcon icon="key"  style={{ fontSize: '20px', color: '#000' }} />}>           
         restablecer contrase??a              
        </Menu.Item> */}
        <Menu.Item key="8"  onClick={e=>this.sideNavTablaDirectorio()} icon={<MDBIcon icon="pencil-alt" style={{ fontSize: '20px', color: '#000' }} />}>           
         EDITA USUARIO              
        </Menu.Item>
        <Menu.Item key="9"  onClick={e=>this.sideFechasNotificaciones()} icon={<MDBIcon icon="user-clock"  style={{ fontSize: '20px', color: '#000' }} />}>           
         NOTIFICACI??N ALTA Y BAJAS              
        </Menu.Item>
        <Menu.Item key="10" onClick={e=>this.sideTablaBajas()} icon={<MDBIcon icon="user-alt-slash"  style={{ fontSize: '20px', color: '#000' }} />}>           
          LISTA DE BAJAS          
        </Menu.Item>
        <Menu.Item key="11" onClick={e=>this.sideNavExt()}  icon={<MDBIcon icon="phone"  style={{ fontSize: '20px', color: '#000' }} />}>           
          LISTA DE EXTENSIONES LIBRES           
        </Menu.Item>
        <Menu.Item key="12" onClick={e=>this.cerrar()} icon={<MDBIcon icon="door-open" style={{ fontSize: '20px', color: '#000' }} />}>           
          CERRAR SESI??N            
        </Menu.Item>
        </Menu>
        </div>
        return(
            <React.Fragment> 
                <Layout >     
                <Sider trigger={null} className="site-layout-background" collapsible collapsed={this.state.collapsed}>  
                <center> 
                    <a>
                    <img src={imagenCEAV} style={{width:"70%",marginTop:"3%"}} />
                    </a>
                    </center> 
                    <br></br>
                    {menu}                     
                </Sider>
                <Layout className="site-layout" >  
                    <Header className="site-layout-background1" > 
                    {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: this.toggle,              
                    }) } 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;             
                <FcGoogle/>&nbsp;<a href="https://www.gob.mx/ceav" target="_blank">www.gob.mx/ceav</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <MDBIcon/><img src={ceav} width="30" height="30"  alt="" /><a href="http://intranet/" target="_blank">intranet/</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                    </Header>         
                        {tablaArea}
                        {tablaOficina}
                        {tablaPersonal}
                        {tablaPuesto}
                        {tablaRoles}
                        {tablaEmpleados}
                        {tablaChangePass}
                        {tablaDataEmpleado}
                        {tablaFechaNotificaciones}
                        {tablaBajasEmpleados}
                        {tablaExt}
                </Layout>
                </Layout>                
                {/* <Footer  className='footer main'>
                <center>
                <FcGoogle />&nbsp;<a href="https://www.gob.mx/ceav" target="_blank">www.gob.mx/ceav</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <MDBIcon/><img src={ceav} width="30" height="30"  alt="" /><a href="http://intranet/" target="_blank">intranet/</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </center>
                </Footer> */}
                
            </React.Fragment>
        )
        }
}export default SideNavAdmin