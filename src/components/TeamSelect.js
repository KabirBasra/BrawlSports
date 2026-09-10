import React, { useState } from 'react';

// Temporary small selection of BSC teams
const TEAMS = [
  { id: 'none', name: 'None', logo: '' },
  { id: 'zetadivision', name: 'Zeta Division', logo: 'https://images.seeklogo.com/logo-png/47/2/zeta-division-logo-png_seeklogo-470671.png' },
  { id: 'crazyracoon', name: 'Crazy Racoon', logo: 'https://1975def466e2065f.main.jp/2025.crazyraccoon.jp/wp/wp-content/uploads/2025/02/company-1024x614.png' },
  { id: 'hmble', name: 'Hmble', logo: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/7/71/HMBLElogo_square.png/revision/latest/scale-to-width-down/220?cb=20251109080418' },
  { id: 'futesports', name: 'FUT Esports', logo: 'https://images.seeklogo.com/logo-png/50/2/fut-esports-logo-png_seeklogo-509813.png' },
  { id: 'teamelektros', name: 'Team Elektros', logo: 'https://www.teamelektros.com/assets/img/press/elektros-logo-dark.png' },
  { id: 'tribegaming', name: 'Tribe Gaming', logo: 'https://yt3.googleusercontent.com/mYlw4Yss99DTDRxQ_pfwle3lXMkvsG-RcSfqddCOX4WHtT0E_UBUtBW2It2xGr3Vt3yMI2JO=s900-c-k-c0x00ffffff-no-rj' },
  { id: 'loud', name: 'LOUD', logo: 'https://raw.githubusercontent.com/idouab/bsc-2025-raw/main/logos/LOUD.png' },
  { id: 'redcanids', name: 'Red Canids', logo: 'https://i.pinimg.com/736x/f3/05/12/f305124e4ddf99571214c8a647cced9d.jpg' },
];

// Team Selection componenet
const TeamSelect = ({ selectedTeam, onSelectTeam }) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const filteredTeams = TEAMS
    .filter((team) => team.name.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) => a.name.localeCompare(b.name));

  const handleSelect = (team) => {
    onSelectTeam(team);
    setQuery(team.name);
    setIsOpen(false);
  };

  return (
    <div className="input-field-container animate-fade-in delay-3">
      <span className="input-subtext">Favorite Team</span>
      <div className='team-input-wrapper'>
        <input
          type="text"
          className="input-text"
          placeholder="Type to search..."
          value={query}
          onFocus={() => setIsOpen(true)}
          onChange={(e) => {
            setQuery(e.target.value);
            onSelectTeam(null);
            setIsOpen(true);
          }}
        />

        {selectedTeam && (
          <img src={selectedTeam.logo} alt={selectedTeam.name} className="input-team-badge" />
        )}

        {isOpen && query.length > 0 && (
          <ul className="suggestions-list">
            {filteredTeams.map((team) => (
              <li key={team.id} onClick={() => handleSelect(team)} className="suggestion-item">
                <img src={team.logo} alt="" className="team-option-logo" />
                <span>{team.name}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TeamSelect;