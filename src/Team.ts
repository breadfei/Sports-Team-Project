import { Player } from './Player'; // Import the Player interface

export class Team {
    players: Player[]; // Array of Player objects
    teamName: string;  // Name of the team

    constructor(teamName: string) {
        this.players = []; // Initialize players as an empty array
        this.teamName = teamName; // Set the team name
    }

    addPlayer(player: Player): void {
        this.players.push(player); // Add player to the players array
    }

    removePlayer(index: number): void {
        if (index >= 0 && index < this.players.length) {
            this.players.splice(index, 1); // Remove player at the specified index
        } else {
            console.error("Invalid index. Player not removed.");
        }
    }

    setActive(index: number, isActive: boolean): void {
        if (index >= 0 && index < this.players.length) {
            this.players[index].active = isActive; // Set the active status of the player
        } else {
            console.error("Invalid index. Active status not set.");
        }
    }

    getPlayerCount(): number {
        return this.players.length; // Return the count of players
    }

    logActivePlayers(): void {
        this.players.forEach(player => {
            if (player.active) {
                console.log(player.name); // Log active players' names
            }
        });
    }

    getActivePlayers(): Player[] {
        return this.players.filter(player => player.active); // Return an array of active players
    }
}