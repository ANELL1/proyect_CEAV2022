import React, {Component} from 'react'
import { Card,Form , Input, Button,Select,Menu } from 'antd'
import axios from 'axios';
import {API} from '../Graphql/Graphql'
import swal from 'sweetalert';
import MUIDataTable from "mui-datatables";
import { EditOutlined,IssuesCloseOutlined } from '@ant-design/icons';
import './sideNavAdmin.css'

class catalogoExtensiones extends Component{
    constructor(props){
        super(props)
        this.state={
            ext:'',
            tablaExtLibre:[],            
            inicio:true,
            tablarenderExt:false 
        } 
    }
    componentDidMount(){
      axios({
        url:API,
        method:'post',
        data:{
          query:`
            query{   
              getTablaCatExtensionesLibres(data:"${[]}"){
                    id_extension
                    numExtension                    
                    statusExtension
                    message
                } 
            }
            `  }           
         })
       .then(response => { 
          this.setState({tablaExtLibre:response.data.data.getTablaCatExtensionesLibres}) 
        })
        .catch(err=>{
           console.log('error' ,err.response)
        }) 
    }

    tablainicio(){
      this.setState({inicio:true})
      this.setState({tablarenderExt:false})
    }
    tablaExt(){
      this.setState({inicio:false})
      this.setState({tablarenderExt:true})
    }

    onChangeInput = (e) =>{
        const {id,value} = e.target;
        this.setState({
            [id]:value
        })
    }

     onSubmitBtn =(e)=>{
         let numExtension = this.state.ext
        if(numExtension){  
            axios({
           url: API,
           method: "post",
           data: {
             query: `
                     mutation{
                        insertCatExtensiones(data:"${[numExtension]}"){  
                         message
                          } 
                     }
                     `
           }
         })
           .then((response) => { 
            if(response.data.data.insertCatExtensiones.message === "registro exitoso"){
                swal({              
               title: "", 
               text:"Registro exitoso",              
               icon: "success",
               button:false,
               timer: 1500
             });  
            //  this.setState({area:[],nomeclatura:[],numSerie:[]})     
             setTimeout(function(){
              window.location.reload()
               }, 1500);     
           }else{
            swal({
               text: "El número de ext. ya fue registrado",
               icon: "info",
               button:false,
               timer: 1500
             }); 
           }          
           }).catch((err) => {
             console.log("error", err.response);
           });     
     
         }else{
            swal({
             title:"Notificación del sistema",
             text: "Por favor llene los campos obligatorios *",
             icon: "warning",             
             button:false
           }); 
         }        
       };

    render(){ 
      const { Option } = Select;
      let formulario;
      let tablaFormulario;      
      let modal;

      const options={ 
        filterType:"drowpdawn",
        responsive: "stacked",
        print:false,
        download:false,
        viewColumns:false,
        filter: false,
        elevation:1,
        selectableRows:"none",
        rowsPerPage:5,
        textLabels:{
        body: {
          noMatch: "Lo sentimos, no se encontraron registros coincidentes",
          toolTip: " Ordenar",
          columnHeaderTooltip: column => `Sort for ${column.label}`
        },
        pagination: {
          next: "Página siguiente",
          previous: "Página anterior",
          rowsPerPage: "Filas por página:",
          displayRows: "de",
        },
        toolbar: {
          search: "Buscar",
          downloadCsv: " Descargar CSV",
          print: "Imprimir ",
          viewColumns: "Ver columnas",
          filterTable: "Tabla de filtros",
        },
        filter: {
          all: "Todos",
          title: "FILTROS",
          reset: "RESET",
        },
        viewColumns: {
          title: "Mostrar columnas",
          titleAria: "Mostrar / Ocultar columnas de tabla",
        },
        selectedRows: {
          text: "fila (s) seleccionadas",
          delete: "Eliminar",
          deleteAria: "Eliminar filas seleccionadas",
        },      
      }        
      } 

 let titulo=<h5><strong>NUEVA EXTENSIÓN CEAV</strong></h5>
     if(this.state.inicio === true){
        formulario =         
        <Card title={titulo} style={{marginTop:"2%", width:"95%",marginLeft:"3%"}}>
          <Form
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 14 }}
              layout="horizontal"
            >
            <Form onSubmitBtn={this.onSubmitBtn}>
              <Form.Item label="NÚMERO DE EXTENSIÓN" required >
                <Input style={{ width: 400 }}  id="ext" name="ext" type="number" onChange={this.onChangeInput} value={this.state.ext}/>
              </Form.Item> 
              <Form.Item>
                <div className="text-center">                   
                <Button className='ant-btnText' onClick={e=>this.onSubmitBtn()} style={{ background: "#73d13d" }}>GUARDAR</Button> &nbsp;&nbsp;&nbsp;
                <Button className='ant-btnText' onClick={e=>this.onClear()} style={{background:"#40a9ff"}} >CANCELAR</Button>
                </div> 
              </Form.Item>
            </Form>
          </Form> 
        </Card>
      }         

      const columns = ["#","NÚM. EXTENSIÓN"]
      let a =1;
      let data = this.state.tablaExtLibre.map((rows)=>{
          return([a++,rows.numExtension])
        })
        if(this.state.tablarenderExt === true){
        tablaFormulario=
        <Card>
          <MUIDataTable    
           title={"LISTA DE EXTENSIONES LIBRES" }
           data={data}
           columns={columns}
           options={options}
           />
        </Card>
        }
        
        return(
          <React.Fragment>   
          <Menu mode="horizontal" className='menuSide' defaultSelectedKeys={['mail']}>
            <Menu.Item key="mail"  icon={<EditOutlined />} onClick={e=>this.tablainicio()}>
            REGISTRAR EXTENSIÓN
            </Menu.Item>
            <Menu.Item key="mail" icon={<IssuesCloseOutlined />} onClick={e=>this.tablaExt()}>
            INF. EXT. LIBRES
            </Menu.Item>
            </Menu>
            {formulario}
            {tablaFormulario}
          </React.Fragment>
        )
    }
    
}export default catalogoExtensiones