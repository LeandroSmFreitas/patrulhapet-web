import React from 'react'
import * as S from './styles'
import SideBar from '../../components/sideBar'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { UseDashboard } from './hooks/dashboardHook';
import { Toolbar } from 'primereact/toolbar';
import { Animals } from '../../models/interfaces/animals';

const Dashboard = () => {
    const { animals, header, footer, imageBodyTemplate, leftToolbarTemplate, selectedAnimal, setSelectedAnimal, statusBodyTemplate, birthDateBodyTemplate } = UseDashboard()
  return (
    <S.Container>
        <SideBar/>
        <S.ContainerDash>
            <S.ContainerTableAndTitle>
                <S.TitleDash>Qual animal será adotado hoje?</S.TitleDash>
                <S.ContainerTable>
                    <Toolbar className="mb-4" left={leftToolbarTemplate} style={{marginBottom: "20px"}}></Toolbar>
                    <DataTable value={animals} header={header} scrollable footer={footer} tableStyle={{ minWidth: '60rem' }} selection={selectedAnimal} onSelectionChange={(e) => setSelectedAnimal(e.value as Animals)}>
                        <Column field="name" header="Nome"></Column>
                        <Column field="description" header="Descrição"></Column>
                        <Column header="Imagem" body={imageBodyTemplate}></Column>
                        <Column field="category" header="Categoria"></Column>
                        <Column body={birthDateBodyTemplate} header="Data de nascimento"></Column>
                        <Column body={statusBodyTemplate} header="Status da adoção"></Column>
                        <Column selectionMode="single" exportable={false}></Column>
                    </DataTable>
                </S.ContainerTable>
            </S.ContainerTableAndTitle>
        </S.ContainerDash>
    </S.Container>
  )
}

export default Dashboard