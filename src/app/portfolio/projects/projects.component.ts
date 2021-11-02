import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'pv2-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss', '../../animated-modal/animated-modal.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  projects: any [] = [
    {
      title: 'Jaadu - An Alien in a Terrarium',
      date: 'Oct 2018 – Jan 2019',
      url: 'https://github.com/oowais/Jaadu',
      text: 'Jaadu is an alien in the FabTerrarium, an open space with different animals/plants interacting with ' +
        'their environment or external users. It crawls in the terrarium reading the emotions of the other ' +
        'entities and displaying those emotions in itself. The materialization of Jaadu is a combination of' +
        ' Arduino, RasPI, 3D Modelling, Sensors, comm modes and LEDs. ',
      teamSize: '3',
      langUsed: 'Python, C++',
      classname: 'card__jaadu'
    },
    {
      title: 'LabChain',
      date: 'Apr 2018 – Aug 2018',
      url: 'https://github.com/oowais/LabChain',
      text: 'Created a Blockchain core called LabChain as part of a lab held by Fraunhofer FIT Blockchain Lab. ' +
        'Components developed: Blockchain Core component (Blocks, Branches, Transactions handling); ' +
        'Automatic Peer Discovery using DNS Seeding; Database store and recovery of Blocks',
      teamSize: '5',
      langUsed: 'Python',
      classname: 'card__labchain'
    },
    {
      title: 'Muses',
      date: 'Oct 2018 – Feb 2019',
      url: 'https://github.com/oowais/Muses',
      text: 'Music recommendation system using content based music similarity. An audio comparison system which' +
        ' compares features of sound/music and recommends the closest song.',
      teamSize: '1',
      langUsed: 'Python',
      classname: 'card__muses'
    },
    {
      title: 'Sock it Up',
      date: '',
      url: '',
      text: 'A robot built using \'MakeBlock Ultimate Robot Kit\' to help physically impaired or older people to' +
        ' wear socks without using any hands. Made as part of UIST Student Innovation Contest 2018 ',
      teamSize: '5',
      langUsed: '',
      classname: 'card__sock'
    },
    {
      title: 'Trajectory Tracking of a Laser Beam',
      date: '2013',
      url: '',
      text: 'Tracking of a laser beam and rendering it on the display screen using projector using OpenCV.',
      teamSize: '2',
      langUsed: 'C++',
      classname: 'card__laser'
    },
    {
      title: 'Master Thesis',
      date: 'Nov 2020 - Jun 2021',
      url: 'https://github.com/rwth-acis/Unsupervised-Link-Discovery-Between-Unstructured-Text-and-Taxonomy/tree/master/profile-discovery',
      text: 'Unsupervised Link Discovery Between Unstructured Text and Taxonomy',
      teamSize: '1',
      langUsed: 'Python',
      classname: 'card__mthesis'
    }
  ];

  openLink(url: string) {
    window.open(url, "_blank");
  }
}
